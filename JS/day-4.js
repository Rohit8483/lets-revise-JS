// Local Storage, Session Storage, and Cookies are all ways to store data in the browser, but they have some differences in terms of usage, lifespan, and storage limits:

// 1. **Local Storage**:
//    - **Lifespan**: Data persists even after the browser is closed and is stored indefinitely until explicitly removed.
//    - **Scope**: Data is accessible across browser windows and tabs that open the same origin (same protocol, domain, and port).
//    - **Storage Limit**: Typically around 5-10MB per origin, which varies across browsers.
//    - **Usage**: Useful for long-term storage of large amounts of data, such as user preferences or cached application data.

const setMyLocalstorage = localStorage.setItem("localStaorageData", [1,2,3,4,5]);
const getMyLocalstorage = localStorage.getItem("localStaorageData");
console.log(getMyLocalstorage);

// 2. **Session Storage**:
//    - **Lifespan**: Data persists only for the duration of the page session. It is cleared when the page session ends, typically when the browser is closed or the tab is closed.
//    - **Scope**: Data is accessible only within the same browser tab or window that created it.
//    - **Storage Limit**: Similar to local storage, but the data is limited to the duration of the session.
//    - **Usage**: Useful for storing temporary data that should be available during a user's visit to a website, such as form data or navigation state.

const setMySessionstorage = sessionStorage.setItem("sessionStorageData", ["session storage",2,3,4,5]);
const getMySessionstorage = sessionStorage.getItem("sessionStorageData");
console.log(getMySessionstorage);

// 3. **Cookies**:
//    - **Lifespan**: Cookies have an expiration date and can persist after the browser is closed, depending on their settings.
//    - **Scope**: Cookies are sent to the server with every HTTP request, so they are accessible both server-side and client-side.
//    - **Storage Limit**: Limited to about 4KB per cookie, and there is a maximum number of cookies per domain.
//    - **Usage**: Often used for storing small pieces of data such as user authentication tokens, session identifiers, or tracking information. They are also commonly used for implementing features like remembering user login status.

// In summary, Local Storage and Session Storage are part of the Web Storage API and provide more storage space and flexibility for client-side data storage. Cookies have been around longer and have additional capabilities such as setting expiration dates and being accessible on the server-side, but they have stricter size limits and are generally less efficient for storing large amounts of data.

// Date.toUTCString() is a method in JavaScript that returns a string representing the date and time in UTC (Coordinated Universal Time) format. It converts the date and time of a Date object to a human-readable string format using the UTC time zone.
const date = new Date();
const utcString = date.toUTCString();
console.log(utcString); // Example output: "Wed, 13 Apr 2022 10:30:00 GMT"


let setMyCookie = (name, value, days)=>{
    let expires="";
    // if(days){
    //     let expiryTime= days;
        
    //     expires='; expires=';
    // }

    document.cookie = name+'='+(value || '')+expires+'; path=/';
}
setMyCookie('hello','hii')




// function getCookie(name) {
//     let nameEQ = name + "=";
//     let cookies = document.cookie.split(';');
//     for(let i = 0; i < cookies.length; i++) {
//         let cookie = cookies[i];
//         while (cookie.charAt(0) === ' ') {
//             cookie = cookie.substring(1, cookie.length);
//         }
//         if (cookie.indexOf(nameEQ) === 0) {
//             return cookie.substring(nameEQ.length, cookie.length);
//         }
//     }
//     return null;
// }

// setMyCookie("username", "John", 7);

// // Get the value of the cookie named "username"
// let username = getCookie("username");
// console.log(username); // Output: John