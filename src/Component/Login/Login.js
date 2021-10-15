import React from "react";

const Login = () => {
  return (
    <div>
      <main class="form-signin py-5 w-25 mx-auto border border-4  rounded shadow-lg my-3">
        <img class="mb-4" src="/favicon.ico" alt="" width="72" height="57" />
        <h1 class="h3 mb-3 fw-normal"> Login</h1>

        <button class="w-100 btn btn-lg btn-primary ">Google SignIn</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </main>
    </div>
  );
};

export default Login;
