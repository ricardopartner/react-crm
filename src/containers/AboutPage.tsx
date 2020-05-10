import * as React from "react";

const styles = {
  about: {
    display: "grid",
    justifyContent: "center",
  },
  title: {
    paddingTop: "50px",
    paddingBottom: "30px",
    textAlign: "center" as TODO,
    fontSize: "36px"
  },
  version: {
    display: "flex",
    justifyContent: "center" as TODO ,
    fontSize: "24px",
    color: "darkcyan",
  },
  desc: {
    padding: "0px 50px",
    fontSize: "20px"
  }
}

// class AboutPage extends React.Component {
const AboutPage: React.FC = () => {
  // render() {
   
    return (
      <div style={styles.about}>
        <div style={styles.title}><b>About</b></div>

        <div style={styles.version}>React CRM App Demo</div>

        <div style={styles.desc}>
          <p>This demo app is not a real application. There is no fake API as back-end service behind the scene. The advanced search in the demo doesn't work properly. Any data update (create or update record) will not be stored after hard refresh or logout. The main purpose of this demo is just a proof of concept.
           </p>
        </div>
      </div>
    );
  }
// }

export default AboutPage;
