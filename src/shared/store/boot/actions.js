import axios from "axios";


export default {
    BOOT(context) {
        return boot(context);
    }
}

const boot = async ({ commit }) => {
    const bootUrl = `${process.env.VUE_APP_SERVICE_URL}/featuredItems`;
    const timeoutInMilli = 10000;
    const requestConfig = {};
    requestConfig.timeout = timeoutInMilli;

    await axios.get(bootUrl, requestConfig).then((response) => {
        const topics = response.data.topics;
        const articles = response.data.articles;
        const coaches = response.data.coaches;

        articles.forEach(article => article.publishedDate = formatDate(article.publishedDate))

        commit('BOOT_SUCCESS', { topics, articles, coaches })
    }).catch((error) => {
        console.log('Error loading boot: '+error)
    });

}

const formatDate = (inputDateTime) => {
    const parsedDate = new Date(inputDateTime);

// Define month names
    const monthNames = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

// Define day names
//     const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get the day, month, and year components
//     const day = dayNames[parsedDate.getDay()];
    const month = monthNames[parsedDate.getMonth()];
    const date = parsedDate.getDate();
    const year = parsedDate.getFullYear();

// Create the formatted date string
    return `${year}, ${month} ${date}`;
}