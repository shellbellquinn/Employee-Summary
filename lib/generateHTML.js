

const fs = require("fs");
const card = require("../templates/card");
const html = require("../templates/html");

class TeamPage {
    constructor(team){
        this.team = team; // add manager to the array of members
    }

    generate(){
        let cards = '';
        for (let employee of this.team) {
            let name = employee.getName();
            let id = employee.getId();
            let email = employee.getEmail();
            let role = employee.getRole();
            let param = '';
            let detail = '';
            switch (role) {
                case "Manager": 
                    detail = employee.getOfficeNumber();
                    param = 'Office Number';
                    break
                case "Employee":
                    detail = employee.getRole();
                    param = 'Role';
                    break;
                case "Intern":
                    detail = employee.getSchool();
                    param = 'School';
            }
            let empCard = card.card(name, role, id, email, param, detail);
            cards = cards + empCard;
        }
        let resHTML = html.html(cards);
        return resHTML;
    }
}

module.exports.TeamPage = TeamPage;