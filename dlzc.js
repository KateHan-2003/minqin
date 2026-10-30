document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('register');
    const loginFormContainer = document.getElementById('login-form');
    const registerFormContainer = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register');
    const showLoginLink = document.getElementById('show-login');
    
    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginFormContainer.classList.add('hidden');
        registerFormContainer.classList.remove('hidden');
    });
    
    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerFormContainer.classList.add('hidden');
        loginFormContainer.classList.remove('hidden');
    });
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();
        
        resetErrors('login');
        
        let isValid = true;
        
        if (!username) {
            document.getElementById('login-username-error').textContent = '请输入用户名';
            isValid = false;
        }
        
        if (!password) {
            document.getElementById('login-password-error').textContent = '请输入密码';
            isValid = false;
        } else if (password.length < 6) {
            document.getElementById('login-password-error').textContent = '密码长度不能少于6个字符';
            isValid = false;
        }
        
        if (isValid) {
            console.log('登录提交:', { username, password });
            alert('登录成功!');
        }
    });
    
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('register-username').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value.trim();
        const confirmPassword = document.getElementById('register-confirm-password').value.trim();
        resetErrors('register');
        let isValid = true;

        if (!username) {
            document.getElementById('register-username-error').textContent = '请输入用户名';
            isValid = false;
        } else if (username.length < 4) {
            document.getElementById('register-username-error').textContent = '用户名长度不能少于4个字符';
            isValid = false;
        }
        
        if (!email) {
            document.getElementById('register-email-error').textContent = '请输入邮箱';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('register-email-error').textContent = '请输入有效的邮箱地址';
            isValid = false;
        }
        
        if (!password) {
            document.getElementById('register-password-error').textContent = '请输入密码';
            isValid = false;
        } else if (password.length < 6) {
            document.getElementById('register-password-error').textContent = '密码长度不能少于6个字符';
            isValid = false;
        }
        
        if (!confirmPassword) {
            document.getElementById('register-confirm-password-error').textContent = '请确认密码';
            isValid = false;
        } else if (password !== confirmPassword) {
            document.getElementById('register-confirm-password-error').textContent = '两次输入的密码不一致';
            isValid = false;
        }
        
        if (isValid) {
            console.log('注册提交:', { username, email, password });
            alert('注册成功!');
            registerFormContainer.classList.add('hidden');
            loginFormContainer.classList.remove('hidden');
            registerForm.reset();
        }
    });
    
    function resetErrors(formType) {
        const errorElements = document.querySelectorAll(`#${formType}-form .error`);
        errorElements.forEach(el => el.textContent = '');
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});