import { BsTranslate } from "react-icons/bs";
import { IconContext } from "react-icons";
import { StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
    textInput: {
        textAlign: 'center',
        flex: 1,
        borderRadius: '10px',
        color: '#AAAAAA',
        fontSize: '20px',
     }
});

const Login = () => {
    return (
        <div className="splitScreen">
            <div className="leftPane">
                <div className="translate">
                    <IconContext.Provider value={{ size: "1.5em", className: "global-class-name" }}>
                        <div>
                            <BsTranslate />
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="login-form">
                    <div className="title">Login Portal</div>
                    <form action="https://www.google.com">
                        <div className="input-container">
                            <TextInput
                                style={styles.textInput}
                                onChangeText={(text) => this.setState({
                                    username: text
                                })}
                                placeholder='User ID'
                            />
                        </div>
                        <div className="input-container">
                            <TextInput
                                style={styles.textInput}
                                secureTextEntry={true}
                                onChangeText={(text) => this.setState({
                                    password: text
                                })}
                                placeholder='Password'
                            />
                        </div>
                        <div className="button-container">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="forgot">
                        <a href="https://www.google.com">Forgot password?</a>
                    </div>
                </div>
            </div>
            <div className="rightPane">
                <img
                    src={require("../impossible.jpg")}
                    className="impossible"
                    alt="Impossible"
                />
            </div>
        </div>
    );
}

export default Login;