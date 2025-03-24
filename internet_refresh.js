window.onload = function() {
    if (!navigator.onLine) {
        setTimeout(function(){
            location.reload(); // ইন্টারনেট না থাকলে প্রতি ১ সেকেন্ডে রিফ্রেশ হবে
        }, 1000);
    }
};