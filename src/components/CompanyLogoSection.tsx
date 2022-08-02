import CDK from "../assets/company/cdk.svg";
import Producers from "../assets/company/Producers.png";
import NT from "../assets/company/NT.png";
import Dicty from "../assets/company/DictyBase.png";

const CompanyLogoSection = () => {
  return (
    <div className={"flex flex-row justify-evenly bg-khaki_web pt-3 pb-3"}>
      <div className={"flex flex-row justify-evenly space-x-20 pt-3 pb-3"}>
        <a href="https://www.cdkglobal.com/">
          <img src={CDK} alt={"CDK"} className={"h-8 mt-4"} />
        </a>
        <a href="http://producersnational.com/">
          <img src={Producers} alt={"Producers"} className={"h-16"} />
        </a>
        <a href="https://www.northerntrust.com/united-states/home">
          <img src={NT} alt={"Northern Trust"} className={"h-16"} />
        </a>
        <a href="https://dictycr.org/">
          <img src={Dicty} alt={"Dictybase"} className={"h-16"} />
        </a>
      </div>
    </div>
  );
};

export default CompanyLogoSection;
