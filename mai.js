
  const emailLink = document.querySelector('.email a');

  emailLink.onclick = function (event) {
    event.preventDefault();
    const email = emailLink.getAttribute("href").substring(7);  // ��ȡ�����ַ
    navigator.clipboard.writeText(email).then(() => {
      alert("�����ַ�Ѹ���: " + email);
    }).catch(err => {
      console.error('�޷�����:', err);
    });
  };

window.onload = function () {
    const latestNav = document.querySelector('.nav-list');
    latestNav.scrollIntoView({ behavior: 'smooth' });
  };
  
   // �����ͣʱ�ı�Ԫ����ɫ�򶯻�
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = "scale(1.1)";
      item.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.2)";
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = "scale(1)";
      item.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    });
  });
  
  // ���ض�����ť����
    const backToTopButton = document.getElementById("backToTop");

    window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    backToTopButton.onclick = function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };