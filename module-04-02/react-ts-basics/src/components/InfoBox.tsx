import {ReactNode} from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

function InfoBox(props: InfoBoxProps) {
  const {children, mode} = props;
  if (props.mode === "hint") {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>
      </aside>
    );
  }

  const {severity} = props;
  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      {mode === "warning" ? <h2>Warning</h2> : null}
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
