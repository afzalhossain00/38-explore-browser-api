const getCookieByName = name => {
    const cookieString = document.cookie;
    const cookieParts = cookieString.split('; ')
    const cookie = cookieParts.find(c => c.includes(name))
    if (cookie) {
        // country=us
        const cookieValue = cookie.split('=')[1]
        return cookieValue;
    }
}


// get cookie value from browser
document.cookie

// get cookie value as array
document.cookie.split('; ')

// get cookie value in key-value pair
document.cookie.split('; ').map(c => console.log(c))