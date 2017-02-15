(function() {
    App.products = App.cable.subscriptions.create("ProductsChannel", {
        connected: function() {},
        disconnected: function() {},
        received: function(data) {
            $(".store #main").html(data.html);
        }
    });
}).call(this);