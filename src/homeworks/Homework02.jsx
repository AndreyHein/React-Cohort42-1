import Card from "../components/Card/Card";
import './styles.css';

function Homework02() {
    const user1 = {
        avatarUrl: "https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/09/homer.png",
        firstName: "Homer",
        lastName: "Simpson",
        job: "Worker at Springfield Nuclear Power Plant",
        hobbys: ["Eating donuts ", "watching TV ", "sleeping ", "spending time at Moe's Tavern "],
    }
    const user2 = {
        avatarUrl: "https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/09/marge.png",
        firstName: "Marge",
        lastName: "Simpson",
        job: "Homemaker",
        hobbys: ["Cooking", "Cleaning", "Volunteering", "Taking care of her family"],
    };
    
    const user3 = {
        avatarUrl: "https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2021/09/bart-.png",
        firstName: "Bart",
        lastName: "Simpson",
        job: "Student at Springfield Elementary",
        hobbys: ["Skateboarding", "Playing pranks", "Watching cartoons", "Causing mischief"],
    };
    
    return <div className="homework02_wrapper">
        <Card user={user1} />
        <Card user={user2} />
        <Card user={user3} />
    </div>
}

export default Homework02;