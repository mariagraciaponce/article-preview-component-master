const shareButton = document.getElementById("share-button");
const shareLinks = document.getElementById("share-links");

shareButton.addEventListener('click', function() {
    if (shareLinks.getAttribute('data-visible') === 'false') {
      shareLinks.style.display = 'flex';
      shareLinks.setAttribute('data-visible', 'true');
    } else {
      shareLinks.style.display = 'none';
      shareLinks.setAttribute('data-visible', 'false');
    }
  });