// {date_utc: "2020-10-22T16:48:30.000Z",
//     name: "	Spanish LaLiga",
//     details:
//       "",
//     id: "5ef6a2e70059c33ceholae4a8293",
//     
//     timestamp: "2023-03-29T16:45Z",
//     home: "Barcelona",
//     away: "Roma",
//     homelogo: "https://a.espncdn.com/i/teamlogos/soccer/500/20091.png",
//     awaylogo: "https://a.espncdn.com/i/teamlogos/soccer/500/21685.png"
//   },

import axios from "axios";
import { teams } from '../texts/teams';

async function fetchUpcomingLaunch(team, divs) {
    console.log('team:', team)
    let response = (
        await axios.get(`https://site.api.espn.com/apis/site/v2/sports/${teams[team].catergory}/${divs}/teams/${teams[team].id}/schedule?fixture=true`)
    ).data;
    
    let responseObj = []
    response.events.forEach(element => {
        // console.log(element.competitions[0].competitors[0].team.displayName)
        const today = new Date();
        if (today.getTime() < new Date(element.date).getTime()) {
            responseObj.push({name:element.season.displayName, details:'', id:element.id, timestamp:element.date, home:element.competitions[0].competitors[0].team.displayName, away:element.competitions[0].competitors[1].team.displayName,homelogo:element.competitions[0].competitors[0].team.logos[0].href, awaylogo:element.competitions[0].competitors[1].team.logos[0].href
            })
        }
        
    });
    return responseObj;
}

async function fetchUpcomingLaunches(team) {
    let responseObj = []

    await Promise.all(teams[team].division.map(async (element) => {
        const contents = await fetchUpcomingLaunch(team, element)
        await contents.forEach(ele => {
            responseObj.push(ele)
        });
    }));

    sortList(responseObj);
    if (responseObj.length > 10){
        const sliced = responseObj.slice(0,10);
        return sliced
    }else{
        return responseObj  
    }
    
}


function sortList(List){
    List.sort((a, b) => {
        // new Date(a.timestamp).getTime()
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    });
}

export default fetchUpcomingLaunches


