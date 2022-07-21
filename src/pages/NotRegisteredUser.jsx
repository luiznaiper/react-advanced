import React, { useContext } from "react";
import { AppContext } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";
import { LoginMutation } from "../containers/LoginMutation";
import { Title } from "../components/UserForm/styles";
const NotRegisteredUser = () => {
    const { activateAuth } = useContext(AppContext);

    return (
        <>
            <div>
                <Title>Log In or Sign Up to see the pictures</Title>
            </div>
            <RegisterMutation>
                {(register, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password };
                        const variables = { input };
                        register({ variables }).then(({ data }) => {
                            const { signup } = data;
                            activateAuth(signup);
                        });
                    };
                    const errorMsg = error && "User already exists.";
                    return (
                        <UserForm
                            error={errorMsg}
                            disabled={loading}
                            onSubmit={onSubmit}
                            title="Sign Up"
                        />
                    );
                }}
            </RegisterMutation>
            <LoginMutation>
                {(login, { data, loading, error }) => {
                    const onSubmit = ({ email, password }) => {
                        const input = { email, password };
                        const variables = { input };
                        login({ variables }).then(({ data }) => {
                            const { login } = data;
                            activateAuth(login);
                        });
                    };
                    const errorMsg = error && "Incorrect password";
                    return (
                        <UserForm
                            error={errorMsg}
                            disabled={loading}
                            onSubmit={onSubmit}
                            title="Log In"
                        />
                    );
                }}
            </LoginMutation>
        </>
    );
};

export { NotRegisteredUser };
