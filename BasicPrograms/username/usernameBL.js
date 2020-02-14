module.exports = {
    checkusername:(username) => {
        var len = username.length;
        if (len <3)
        {
            console.log("Please enter minimum 3 character!")
        }
        else{
            console.log("Hello " +username+  ", How are you?");
        }
    }
}