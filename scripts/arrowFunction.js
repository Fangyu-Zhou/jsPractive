let obj = {
    a: 1,
    fun : function(cb) {
        (() => {
            console.log(this);
        })();
    }
}

function show() {
    console.log(this);
}

show();