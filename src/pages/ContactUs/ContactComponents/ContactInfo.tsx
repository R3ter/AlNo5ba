import { BsFillTelephoneFill } from "react-icons/bs";
import P from "../../../components/SimpleComponents/P";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

export default () => {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#f2f7f7",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: 50,
      }}
    >
      <div>
        <TextWithIcon
          Icon={BsFillTelephoneFill}
          title="هاتف"
          style={{ justifyContent: "right", color: "#420b73" }}
        />
        <P style={{ marginRight: "50px", marginTop: "-20px" }}>0521501501205</P>
      </div>
      <div>
        <TextWithIcon
          Icon={MdEmail}
          title="البريد الالكتروني"
          style={{ justifyContent: "right", color: "#420b73" }}
        />
        <P style={{ marginRight: "50px", marginTop: "-20px" }}>
          wadawd@awdawd,com
        </P>
      </div>
      <div>
        <TextWithIcon
          Icon={IoLocationSharp}
          title="العنوان"
          style={{ justifyContent: "right", color: "#420b73" }}
        />
        <P style={{ marginRight: "50px", marginTop: "-20px" }}>
          صيششصي شسيصشي شصيشييصشصي
        </P>
      </div>
    </div>
  );
};
interface IProps {
  Icon: any;
  title: string;
  style?: React.CSSProperties;
}
const TextWithIcon = ({ Icon, title, style = {} }: IProps) => {
  return (
    <div style={{ display: "flex", ...style }}>
      <h3
        style={{
          alignSelf: "center",
          marginRight: "10px",
        }}
      >
        {title}
      </h3>

      <Icon
        style={{
          fontSize: "22px",
          alignSelf: "center",
          transform: "scaleX(-1)",
        }}
      />
    </div>
  );
};
