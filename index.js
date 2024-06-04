// read & unread

$(document).ready(function() {
    function updateBadge() {
        var unreadCount = $('.notification.unread').length;
        if (unreadCount > 0) {
            $('.badge').text(unreadCount).show();
        } else {
            $('.badge').hide();
        }
    }

    updateBadge();

    $('.seen-icon').click(function() {
        var notification = $(this).closest('.notification');
        notification.toggleClass('unread read');
        updateBadge();
    });

    $('.readBtn').click(function() {
        $('.notification').removeClass('unread').addClass('read');
        updateBadge();
    });
});

// modal

$(document).ready(function() {
    const modal = $("#userProfileModal1");
    const openModalButton = $(".openModalButton1");
    const followButton = $("#followButton1");
  
    openModalButton.click(() => {
      modal.show();
    });

    $(window).click(function(event) {
      if (event.target == modal[0]) {
        modal.hide();
      }
    });
  
    followButton.click(() => {
      console.log("Follow button clicked!");
  
      if (followButton.text() === "Follow") {
        followButton.text("Unfollow");
        followButton.addClass("unfollow-button");
      } else {
        followButton.text("Follow");
        followButton.removeClass("unfollow-button");
      }
    });
  });

$(document).ready(function() {
    const modal = $("#userProfileModal2");
    const openModalButton = $(".openModalButton2");
    const closeModalButton = $("#closeModal");
    const followButton = $("#followButton2");

    openModalButton.click(() => {
        modal.show();
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });

     followButton.click(() => {
        console.log("Follow button clicked!");
    
        if (followButton.text() === "Follow") {
          followButton.text("Unfollow");
          followButton.addClass("unfollow-button");
        } else {
          followButton.text("Follow");
          followButton.removeClass("unfollow-button");
        }
      });
});

$(document).ready(function() {
    const modal = $("#userProfileModal3");
    const openModalButton = $(".openModalButton3");
    const closeModalButton = $("#closeModal");
    const followButton = $("#followButton3");

    openModalButton.click(() => {
        modal.show();
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });

     followButton.click(() => {
        console.log("Follow button clicked!");
    
        if (followButton.text() === "Follow") {
          followButton.text("Unfollow");
          followButton.addClass("unfollow-button");
        } else {
          followButton.text("Follow");
          followButton.removeClass("unfollow-button");
        }
      });
});

$(document).ready(function() {
    const modal = $("#userProfileModal4");
    const openModalButton = $(".openModalButton4");
    const closeModalButton = $("#closeModal");
    const followButton = $("#followButton4");

    openModalButton.click(() => {
        modal.show();
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });

     followButton.click(() => {
        console.log("Follow button clicked!");
    
        if (followButton.text() === "Follow") {
          followButton.text("Unfollow");
          followButton.addClass("unfollow-button");
        } else {
          followButton.text("Follow");
          followButton.removeClass("unfollow-button");
        }
      });
});

$(document).ready(function() {
    const modal = $("#userProfileModal5");
    const openModalButton = $(".openModalButton5");
    const closeModalButton = $("#closeModal");
    const followButton = $("#followButton5");

    openModalButton.click(() => {
        modal.show();
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });

     followButton.click(() => {
        console.log("Follow button clicked!");
    
        if (followButton.text() === "Follow") {
          followButton.text("Unfollow");
          followButton.addClass("unfollow-button");
        } else {
          followButton.text("Follow");
          followButton.removeClass("unfollow-button");
        }
      });
});

$(document).ready(function() {
    const modal = $("#userProfileModal6");
    const openModalButton = $(".openModalButton6");
    const closeModalButton = $("#closeModal");
    const followButton = $("#followButton6");

    openModalButton.click(() => {
        modal.show();
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });

     followButton.click(() => {
        console.log("Follow button clicked!");
    
        if (followButton.text() === "Follow") {
          followButton.text("Unfollow");
          followButton.addClass("unfollow-button");
        } else {
          followButton.text("Follow");
          followButton.removeClass("unfollow-button");
        }
      });
});

$(document).ready(function() {
    const modal = $("#userProfileModal7");
    const openModalButton = $(".openModalButton7");
    const closeModalButton = $("#closeModal");
    const followButton = $("#followButton7");

    openModalButton.click(() => {
        modal.show();
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });

     followButton.click(() => {
        console.log("Follow button clicked!");
    
        if (followButton.text() === "Follow") {
          followButton.text("Unfollow");
          followButton.addClass("unfollow-button");
        } else {
          followButton.text("Follow");
          followButton.removeClass("unfollow-button");
        }
      });
});