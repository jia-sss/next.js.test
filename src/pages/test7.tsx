import { useEffect, useState } from "react";

export default function Test7() {
    const [html, setHtml] = useState("");

    useEffect(() => {
        document.addEventListener("paste", e => {
            // console.log(e.clipboardData?.getData('text/html'));
            const html = e.clipboardData?.getData("text/html");
            setHtml(html!);
            //去除 \n
            // html = html?.replace(/\n/g,'');
            const $doc = new DOMParser().parseFromString(html!, "text/html");
            const $trs = $doc.querySelectorAll("table tr");
            console.log([$doc]);
            console.log($trs[0]);
            // setHtml($trs[0].innerHTML)
            const qwe = document.getElementById("qwe");
            if (!qwe) return;
            const d = qwe.getElementsByClassName("xl66")[0];
            if (!d) return;
            const aa = getComputedStyle(d).backgroundColor;
            // debugger
            console.log(aa);
        });
    });

    return (
        <div>
            <div
                style={{ display: "none" }}
                id="qwe"
                dangerouslySetInnerHTML={{ __html: html }}
            ></div>
        </div>
    );
}
