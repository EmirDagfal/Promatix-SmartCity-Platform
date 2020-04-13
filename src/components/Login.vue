<template>
    <v-container>
    <v-row
        align="center"
        justify="center"
    >
        
        <v-card>
            <v-toolbar
            >
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer />
            </v-toolbar>
            <v-card-text>
            <v-form>
                <v-text-field
                label="Login"
                name="login"
                prepend-icon="mdi-place"
                type="text"
                >
                <v-icon>mdi-pencil</v-icon>
                </v-text-field>

                <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="lock"
                type="password"
                />
            </v-form>
            </v-card-text>
            <v-card-actions>
            <v-spacer />
            <v-btn color="primary">Login</v-btn>
            </v-card-actions>
        </v-card>
        
    </v-row>
    </v-container>
</template>

<script>
  export default {
    // props: {
    //   source: String,
    // },
  }
</script>