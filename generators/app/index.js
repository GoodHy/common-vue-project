"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`欢迎使用 ${chalk.red("宜买车前端项目")} 生成器!`));

    const prompts = [
      {
        type: "input",
        name: "name",
        message: "请输入项目名:",
        default: "yiautos-project"
      },
      {
        type: "list",
        name: "type",
        message: "请输入项目类型:",
        choices: ["Web项目", "Wap项目", "微前端Web项目"]
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let path;
    if (this.props.type === "Web项目") {
      path = this.templatePath("web");
    } else if (this.props.type === "Wap项目") {
      path = this.templatePath("wap");
    } else if (this.props.type === "微前端Web项目") {
      path = this.templatePath("micro-web");
      this.fs.copy(this.templatePath("micro-config/env.test"), this.destinationPath(this.props.name + '/.env.test'));
      this.fs.copy(this.templatePath("micro-config/env.production"), this.destinationPath(this.props.name + '/.env.production'));
      this.fs.copy(this.templatePath("micro-config/env.development"), this.destinationPath(this.props.name + '/.env.development'));
    } else {
      path = this.templatePath("wap");
    }
    this.fs.copy(this.templatePath("config/gitignore"), this.destinationPath(this.props.name + "/.gitignore"));
    this.fs.copy(this.templatePath("config/editorconfig"), this.destinationPath(this.props.name + "/.editorconfig"));
    this.fs.copy(this.templatePath("config/eslint.config.js"), this.destinationPath(this.props.name + '/.eslintrc.js'));
    this.fs.copy(this.templatePath("config/prettier"), this.destinationPath(this.props.name + '/.prettierrc'));
    this.fs.copy(this.templatePath("config/env.production"), this.destinationPath(this.props.name + '/.env.production'));
    this.fs.copy(this.templatePath("config/env.development"), this.destinationPath(this.props.name + '/.env.development'));
    this.fs.copy(path, this.destinationPath(this.props.name));
  }

  install() {
    //this.installDependencies();
  }
};
