import React from 'react';

const techStack = () => {
  return (
    <div>
      <h2 className="tech-stack" style={{ marginTop: '35px' }}>
        Tech Stack:
      </h2>
      <h5 className="techs">
        <span
          className="btn22"
          id="langBtn"
          onClick={() => {
            document.getElementById('framework').style.display = 'none';
            document.getElementById('techBox').style.display = 'none';
            document.getElementById('languages').style.display = 'block';
            document.getElementById('langBtn').setAttribute('class', 'btn22');
            document.getElementById('langBtn1').setAttribute('class', 'btn2');
            document.getElementById('langBtn2').setAttribute('class', 'btn2');
          }}
        >
          Languages
        </span>{' '}
        |{' '}
        <span
          className="btn2"
          id="langBtn1"
          onClick={() => {
            document.getElementById('languages').style.display = 'none';
            document.getElementById('techBox').style.display = 'none';
            document.getElementById('framework').style.display = 'block';
            document.getElementById('langBtn').setAttribute('class', 'btn2');
            document.getElementById('langBtn1').setAttribute('class', 'btn22');
            document.getElementById('langBtn2').setAttribute('class', 'btn2');
          }}
        >
          {' '}
          Frameworks
        </span>{' '}
        |{' '}
        <span
          className="btn2"
          id="langBtn2"
          onClick={() => {
            document.getElementById('languages').style.display = 'none';
            document.getElementById('framework').style.display = 'none';
            document.getElementById('techBox').style.display = 'block';
            document.getElementById('langBtn').setAttribute('class', 'btn2');
            document.getElementById('langBtn1').setAttribute('class', 'btn2');
            document.getElementById('langBtn2').setAttribute('class', 'btn22');
          }}
        >
          {' '}
          Tech
        </span>
      </h5>

      <div className="Skill">
        <div className="languages" id="languages">
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              alt="C"
              className="tech-icon"
            />
            <span>C</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
              alt="C++"
              className="tech-icon"
            />{' '}
            <span>C++</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              className="tech-icon"
            />
            <span>Python</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="tech-icon"
            ></img>
            <span>JavaScript</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="tech-icon"
            ></img>
            <span>CSS</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="tech-icon"
            ></img>
            <span>HTML</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg"
              alt="LaTeX"
              className="tech-icon"
            ></img>
            <span>LaTeX</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="LaTeX"
              className="tech-icon"
            ></img>
            <span>TypeScript</span>
          </div>
        </div>
        <div className="framework" id="framework">
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="tech-icon"
            ></img>
            <span>React </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="tech-icon"
            ></img>
            <span>React Native</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="Redux"
              className="tech-icon"
            ></img>
            <span>Redux</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node"
              className="tech-icon"
            ></img>
            <span>Node JS </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap"
              className="tech-icon"
            ></img>
            <span>Bootstrap </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              alt="material ui"
              className="tech-icon"
            ></img>
            <span>Material UI </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              alt="tailwind"
              className="tech-icon"
            ></img>
            <span>TailwindCSS</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
              className="tech-icon"
            />
            <span>jQuery </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              className="tech-icon"
            />
            <span>Express </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
              className="tech-icon"
            />
            <span>Vue </span>
          </div>
          <div className="btn3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Jinja_software_logo.svg"
              alt="Jinja"
              className="tech-icon"
            ></img>
            <span>Jinja </span>
          </div>

          <div className="btn3">
            <img
              src="https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg"
              alt="hadoop"
              className="tech-icon"
            ></img>
            <span>hadoop </span>
          </div>
          <div className="btn3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg"
              alt="spark"
              className="tech-icon"
            ></img>
            <span>Spark </span>
          </div>
        </div>
        <div className="techBox" id="techBox">
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="Figma"
              className="tech-icon"
            ></img>
            <span>Figma </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
              className="tech-icon"
            ></img>
            <span>PostgreSQL </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="MySQL"
              className="tech-icon"
            ></img>
            <span>MySQL </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              className="tech-icon"
            ></img>
            <span>MongoDB</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg"
              alt="Three"
              className="tech-icon"
            ></img>
            <span>Three JS</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
              className="tech-icon"
            ></img>
            <span>Git </span>
          </div>

          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg"
              alt="ESLint"
              className="tech-icon"
            ></img>
            <span>ESLint </span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
              className="tech-icon"
            ></img>
            <span>Docker</span>
          </div>
          <div className="btn3">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
              alt="Docker"
              className="tech-icon"
            ></img>
            <span>Jira</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default techStack;
