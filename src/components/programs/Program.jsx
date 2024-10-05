// Import the CSS file for styling
import "./Program.css";

// Import images for the programs
import program_1 from "../../assets/program-1.jpeg";
import program_2 from "../../assets/program-2.jpeg";
import program_3 from "../../assets/program-3.jpg";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Program = () => {
  return (
    <div className="programs" id="program">
      {/* First program */}
      <div className="program">
        <img src={program_1} alt="Graduation Degree Program" height="320px" />
        <div className="caption">
          <img src={program_icon_1} alt="Graduation Icon" />
          <p>Graduation Degree</p>
        </div>
      </div>

      {/* Second program */}
      <div className="program">
        <img src={program_2} alt="Master Degree Program" height="320px" />
        <div className="caption">
          <img src={program_icon_2} alt="Master Degree Icon" />
          <p>Master Degree</p>
        </div>
      </div>

      {/* Third program */}
      <div className="program">
        <img src={program_3} alt="Post Graduation Program" />
        <div className="caption">
          <img src={program_icon_3} alt="Post Graduation Icon" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Program;
