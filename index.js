const notifications = [
  {
    id: 1,
    name: 'Mark Webber',
    profilePic: './assets/images/avatar-mark-webber.webp',
    action: 'reacted to your recent post',
    target: 'My first tournament today!',
    time: '1m ago',
    unread: true,
    followers: 17,
    following: 8,
    posts: 21,
  },
  {
    id: 2,
    name: 'Angela Gray',
    profilePic: './assets/images/avatar-angela-gray.webp',
    action: 'followed you',
    time: '5m ago',
    unread: true,
    followers: 28,
    following: 19,
    posts: 35,
  },
  {
    id: 3,
    name: 'Jacob Thompson',
    profilePic: './assets/images/avatar-jacob-thompson.webp',
    action: 'has joined your group',
    target: 'Chess Club',
    time: '1 day ago',
    unread: true,
    followers: 91,
    following: 101,
    posts: 73,
  },
  {
    id: 4,
    name: 'Rizky Hasanuddin',
    profilePic: './assets/images/avatar-rizky-hasanuddin.webp',
    action: 'sent you a private message',
    time: '5 days ago',
    unread: false,
    message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    followers: 17,
    following: 23,
    posts: 19,
  },
  {
    id: 5,
    name: 'Kimberly Smith',
    profilePic: './assets/images/avatar-kimberly-smith.webp',
    action: 'commented on your picture',
    time: '1 week ago',
    unread: false,
    imgComment: './assets/images/image-chess.webp',
    followers: 21,
    following: 17,
    posts: 8,
  },
  {
    id: 6,
    name: 'Nathan Peterson',
    profilePic: './assets/images/avatar-nathan-peterson.webp',
    action: 'reacted to your recent post',
    target: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
    unread: false,
    followers: 30,
    following: 54,
    posts: 21,
  },
  {
    id: 7,
    name: 'Anna Kim',
    profilePic: './assets/images/avatar-anna-kim.webp',
    action: 'left the group',
    target: 'Chess Club',
    time: '2 weeks ago',
    unread: false,
    followers: 17,
    following: 8,
    posts: 21,
  },
];

$(document).ready(function() {
  function updateBadge() {
    var unreadCount = $('.notification.unread').length;
    if (unreadCount > 0) {
      $('.badge').text(unreadCount).show();
    } else {
      $('.badge').hide();
    }
  }

  function updateNotificationArray(id, unread) {
    const notification = notifications.find(n => n.id === id);
    if (notification) {
      notification.unread = unread;
    }
  }

  const notificationList = document.getElementById('notification-list');
  const modalList = document.getElementById('modal-list');

  notifications.forEach(notification => {
    // Notification HTML
    const notificationHTML = `
      <div class="notification ${notification.unread ? 'unread' : 'read'}" data-id="${notification.id}">
        <a href="#" class="openModalButton${notification.id} openModal" data-toggle="modal" data-target="#userProfileModal${notification.id}">
          <img class="profile-pic" src="${notification.profilePic}" alt="profile-pic">
        </a>
        <div class="content">
          <p>
            <span>${notification.name}</span> ${notification.action} ${notification.target ? `<span class="action">${notification.target}</span>` : ''}<i class="fas fa-circle circle-icon" style="color:hsl(1, 90%, 64%);"></i>
          </p>
          <div class="time">${notification.time}</div>
          ${notification.message ? `<div class="message">${notification.message}</div>` : ''}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill seen-icon" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
        </svg>
      </div>
    `;
    notificationList.insertAdjacentHTML('beforeend', notificationHTML);

    // Modal HTML
    const modalHTML = `
      <div class="modal fade" id="userProfileModal${notification.id}" tabindex="-1" aria-labelledby="userProfileModalLabel${notification.id}" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="userProfileModalLabel${notification.id}">${notification.name}</h5>
            </div>
            <div class="modal-body">
              <div class="user-image text-center">
                <img src="${notification.profilePic}" alt="User Profile Picture" class="img-fluid">
              </div>
              <div class="user-info mt-3">
                <p><strong>Followers:</strong> ${notification.followers}</p>
                <p><strong>Following:</strong> ${notification.following}</p>
                <p><strong>Posts:</strong> ${notification.posts}</p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary follow-button" id="followButton${notification.id}" data-following="false">Follow</button>
            </div>
          </div>
        </div>
      </div>
    `;
    modalList.insertAdjacentHTML('beforeend', modalHTML);
  });

  updateBadge();

  $('#notification-list').on('click', '.seen-icon', function() {
    var notification = $(this).closest('.notification');
    var id = parseInt(notification.data('id'), 10);
    notification.toggleClass('unread read');
    updateNotificationArray(id, notification.hasClass('unread'));
    updateBadge();
  });

  $('.readBtn').click(function() {
    $('.notification').removeClass('unread').addClass('read');
    notifications.forEach(notification => {
      notification.unread = false;
    });
    updateBadge();
  });

  document.addEventListener('click', function(event) {
    const modalDialog = document.querySelector('.modal-dialog');
    if (modalDialog && !modalDialog.contains(event.target)) {
      $('.modal').modal('hide');
    }
  });

  document.querySelectorAll('.follow-button').forEach(button => {
    button.addEventListener('click', function() {
      const following = this.getAttribute('data-following');
      if (following === 'false') {
        this.textContent = 'Unfollow';
        this.setAttribute('data-following', 'true');
      } else {
        this.textContent = 'Follow';
        this.setAttribute('data-following', 'false');
      }
    });
  });
});
