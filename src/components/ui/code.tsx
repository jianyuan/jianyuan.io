import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-python";

import Prism from "prismjs";

export function Code({
  language,
  children,
}: {
  language: string;
  children: string;
}) {
  return (
    <pre className={`language-${language}`}>
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(
            children,
            Prism.languages[language],
            language,
          ),
        }}
      />
    </pre>
  );
}
