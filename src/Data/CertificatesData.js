// CertificatesData.js
import { Crop32 } from "@mui/icons-material";
import c1 from "../components/asset/certificates/c1.png";
import c2 from "../components/asset/certificates/c2.png";
import c3 from "../components/asset/certificates/c3.png";
import c4 from "../components/asset/certificates/c4.png";
import c5 from "../components/asset/certificates/c5.png";


let certificationsList = [
    {
        title: "Trends and Future of Full Stack Development",
        instructor: "TOPS Technologies",
        link: "#",
        platform: "TOPS Technologies",
        certificateImage: c1
    },
    {
        title: "Live Project Training and Documentation",
        instructor: "TOPS Technologies",
        link: "#",
        platform: "TOPS Technologies",
        certificateImage: c2
    },
    {
        title: "React Js",
        instructor: "SimpliLearn",
        link: "#",
        platform: "SimpliLearn",
        certificateImage: c3
    },
    {
        title: "Node JS",
        instructor: "SimpliLearn",
        link: "#",
        platform: "SimpliLearn",
        certificateImage: c4
    },
    {
        title: "MongoDB Tutorial",
        instructor: "Great Learning",
        link: "#",
        platform: "Great Learning",
        certificateImage: c5
    }
];

const CertificatesData = { certificationsList };
export default CertificatesData;