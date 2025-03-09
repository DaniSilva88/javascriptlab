let personRole = "Employee";
let userAuthorization;

switch (personRole) {
    case "Employee":
        userAuthorization = "authorized to have access to Dietary Services";
        break;
    case "Enrolled Member":
        userAuthorization = "authorized to have access to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        userAuthorization = "authorized to have partial access to facilitate Dietary Services only.";
        break;
    default:
        userAuthorization = "Non-Subscriber, need to enroll or at least subscribe first to avail this facility";
}

console.log("User Message:", userAuthorization);
