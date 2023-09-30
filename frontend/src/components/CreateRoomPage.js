import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography  from "@material-ui/core/Typography";
import TestField from "@material-ui/core/TestField";
import FormHelperText  from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import  Radio  from "@material-ui/core/Radio";
import  RadioGroup  from "@material-ui/core/RadioGroup";
import  FormControlLabel from "@material-ui/core/FromControlLabel";

export default class CreateRoomPage extends Component {
    defaultVotes = 2;
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component = "h4" variant="h4">
                        Create A Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl Component = "fieldset">
                        <FormHelperText>
                            <dev align = 'centre'>
                                Guest Control of Playback state
                            </dev>
                            <RadioGroup row defaultValue='true'>
                                <FormLabelControl value ="true" control={<Radio Color = "primary"/>}></FormLabelControl>
                            </RadioGroup>
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}