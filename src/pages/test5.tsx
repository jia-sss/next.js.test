import { useEffect, useState } from "react";

interface IData {
    id: number;
    name: string;
    age: number;
}
export default function Test5() {
    const [db, setDb] = useState<IDBDatabase | null>(null);
    const [objectStore, setObjectStore] = useState<IDBObjectStore>();
    const [data, setData] = useState<IData | null>(null);

    useEffect(() => {
        // 打开或创建名为myDB的indexedDB数据库，并创建名为myObjectStore的对象存储空间
        const request: IDBOpenDBRequest = window.indexedDB.open("myDB", 1);
        request.onerror = function (e) {
            console.log("打开数据库失败");
        };
        request.onsuccess = function (e) {
            setDb(request.result);
            console.log("打开数据库成功", request.result);
        };
        request.onupgradeneeded = function (e) {
            const db = request.result;
            console.log("创建数据库成功");
            setObjectStore(
                db.createObjectStore("myObjectStore", { keyPath: "id" })
            );
        };
    }, []);
    // 添加数据到对象存储空间
    function addObject(data: IData) {
        //添加数据
        const request = objectStore!.add(data);
        request.onerror = function (event) {
            console.log("添加数据失败");
        };
        request.onsuccess = function (event) {
            console.log("添加数据成功");
        };
    }

    function updateObject(data: IData) {
        const request = (db!.transaction(
            ["myObjectStore"],
            "readwrite"
        ).request.onerror = function (event) {
            console.log("更新数据失败");
        });
        request.onsuccess = function (event) {
            console.log("更新数据成功");
        };
    }

    // 读取对象存储空间中的数据
    function readObject(id) {
        const request = objectStore!.get(id);
        request.onerror = function (event) {
            console.log("读取数据失败");
        };
        request.onsuccess = function (event) {
            const data = request.result;
            console.log("读取数据成功");
            console.log(data);

            setData(data);
        };
    }
    function handleClick() {
        const myArray = [
            { id: 1, name: "小明", age: 20 },
            { id: 2, name: "小红", age: 22 },
            { id: 3, name: "小张", age: 24 },
        ];
        addObject(myArray[0]);
        addObject(myArray[1]);
        addObject(myArray[2]);

        // 更新数据
        myArray[1].age = 23;
        updateObject(myArray[1]);

        // 读取数据
        readObject(2);
    }

    return (
        <div>
            <button onClick={handleClick}>add</button>
        </div>
    );
}
