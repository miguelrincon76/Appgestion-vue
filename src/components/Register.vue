<template>
  <v-container>
    <div class="registro">
      <h2>FORMULARIO DE REGISTRO</h2>
      <v-divider></v-divider>
      <div class="container">
        <div class="card card-container">
          <img
            id="profile-img"
            class="profile-img-card"
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          />
          <p id="profile-name" class="profile-name-card"></p>
          <!-- register form -->
          <form class="form-signup" v-on:submit.prevent="register">
            <v-container fluid>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="usuario.username"
                    label="Username"
                    type="text"
                    outlined
                    dense
                    value=""
                    autofocus
                  ></v-text-field>
                  <v-text-field
                    v-model="usuario.email"
                    label="Email"
                    type="email"
                    outlined
                    dense
                  ></v-text-field>
                  <v-text-field
                    v-model="usuario.password"
                    label="Password"
                    outlined
                    type="password"
                    dense
                  ></v-text-field>
                  <v-combobox
                    v-model="usuario.role"
                    auto-select-first
                    :items="roles"
                    label="Elija Roles"
                    multiple
                    outlined
                    dense
                  ></v-combobox>
                </v-col>
              </v-row>
            </v-container>
            <button
              class="btn btn-lg btn-primary btn-block btn-signup"
              type="submit"
            >
              Registrar
            </button>
          </form>
          <!-- /form -->
          <b-alert show variant="warning" v-if="error">{{ error_msg }}</b-alert>
        </div>
        <!-- /card-container -->
      </div>
      <!-- /container -->
    </div>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {},
  data: function () {
    return {
      usuario: { username: "", email: "", password: "", role: "" },
      error: false,
      error_msg: "",
      roles: ["Admin", "User", "Presupuestador"],
    };
  },
  methods: {
    ...mapActions(["register"]),
  },
};
</script>

<style scoped>
/*
 * Specific styles of signup component
 */
/*
 * General styles
 */
body,
html {
  height: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));
}

.card-container.card {
  max-width: 350px;
  padding: 40px 40px;
}

.btn {
  font-weight: 700;
  height: 36px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

/*
 * Card component
 */
.card {
  background-color: #f7f7f7;
  /* just in case there no content*/
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  /* shadows and rounded borders */
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

/*
 * Form styles
 */
.profile-name-card {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 0;
  min-height: 1em;
}

.reauth-email {
  display: block;
  color: #404040;
  line-height: 2;
  margin-bottom: 10px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form-signup #inputEmail,
.form-signup #inputPassword {
  direction: ltr;
  height: 44px;
  font-size: 16px;
}

.form-signup input[type="email"],
.form-signup input[type="password"],
.form-signup input[type="text"],
.form-signup button {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form-signup .form-control:focus {
  border-color: rgb(104, 145, 162);
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgb(104, 145, 162);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(104, 145, 162);
}

.btn.btn-signup {
  /*background-color: #4d90fe; */
  background-color: rgb(104, 145, 162);
  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/
  padding: 0px;
  font-weight: 700;
  font-size: 14px;
  height: 36px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: none;
  -o-transition: all 0.218s;
  -moz-transition: all 0.218s;
  -webkit-transition: all 0.218s;
  transition: all 0.218s;
}

.btn.btn-signup:hover,
.btn.btn-signup:active,
.btn.btn-signup:focus {
  background-color: rgb(12, 97, 33);
}
</style>
