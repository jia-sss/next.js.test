import {} from "react";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/foundation.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";

const md =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, explicabo architecto! Ab nostrum necessitatibus sequi architecto animi commodi officiis nulla adipisci natus incidunt, molestiae nam quos quibusdam in qui laudantium?\n\nLorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam quia, accusamus ad aliquid molestiae cumque nobis itaque doloremque illo quos illum voluptate perspiciatis quam. Quis, dolorum. Voluptas, harum et!\n\n```javascript\n// test\nconst markdownText = '# Hello, Markdown!';\nconst html = marked(markdownText);\ndocument.getElementById('markdown-container').innerHTML = html;\n```\n\nipsum dolor sit amet consectetur adipisicing elit. Vel necessitatibus laborum dignissimos? Itaque amet, repellendus perferendis corporis voluptatibus delectus ullam illo praesentium velit eos aliquid consectetur dicta aliquam nisi ea!";

export default function Test6() {
    // const renderer = {
    //     code(code, info, escaped) {
    //         // console.log(code, info, escaped);
    //         const aa = (
    //             <SyntaxHighlighter
    //                 language={info}
    //                 style={oneDark}
    //                 customStyle={{ margin: 0 }}
    //             >
    //                 code
    //             </SyntaxHighlighter>
    //         );

    //         return aa;
    //     },
    // };
    // marked.use({ renderer });

    return (
        <div className="qwe">
            <ReactMarkdown
                components={{
                    code({ node, className, children, ...props }) {
                        console.log(node, className, children, props);
                        const match = /language-(\w+)/.exec(className || "");
                        console.log(match);

                        return (
                            <SyntaxHighlighter
                                language={(match && match[1]) || ""}
                                style={oneDark}
                            >
                                {String(children)}
                            </SyntaxHighlighter>
                        );
                    },
                }}
            >
                {md}
            </ReactMarkdown>
        </div>
    );
}
