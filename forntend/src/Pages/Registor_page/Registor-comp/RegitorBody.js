import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Typography,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function DaycareForm() {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [auth, setAuth] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  // Handle form field input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  // Handle authentication input changes (for popup)
  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setAuth((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation function
  const validateForm = () => {
    const newErrors = {};
    for (const key in formValues) {
      if (!formValues[key]?.trim()) {
        newErrors[key] = "This field is required";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Approve button click handler
  const handleApproveClick = () => {
    if (validateForm()) {
      setOpen(true);  // Open the authentication popup
    }
  };

  // Close the popup
  const handleClose = () => {
    setOpen(false);
  };

  // Submit the form (authentication and form values)
  const handleSubmit = () => {
    console.log("Form Submitted", { formValues, auth });
    setOpen(false);  // Close the popup after submit
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Daycare New Parent Interview Form
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        POUNDATION
      </Typography>

      <Grid container spacing={2}>
        {/* Child Information */}
        <Grid item xs={12}>
          <Typography variant="h6">Child Information</Typography>
        </Grid>
        {[ 
          { label: "Child Number", name: "childNumber" },
          { label: "Name of Child", name: "childName" },
          { label: "Age", name: "age" },
          { label: "Sex", name: "sex" },
          { label: "Date of Birth", name: "dob" },
          { label: "Date of Interview", name: "interviewDate" },
          { label: "Date Joined Adera", name: "joinedDate" },
        ].map((field, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              fullWidth
              label={field.label}
              name={field.name}
              variant="outlined"
              onChange={handleInputChange}
              error={!!errors[field.name]}
              helperText={errors[field.name]}
            />
          </Grid>
        ))}

        {/* Guardian Information */}
        <Grid item xs={12}>
          <Typography variant="h6">Guardian Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox />}
            label="Does live in a single parent home?"
            onChange={(e) =>
              setFormValues((prev) => ({
                ...prev,
                singleParent: e.target.checked,
              }))
            }
          />
        </Grid>
        {[ 
          { label: "Name of Mother", name: "motherName" },
          { label: "Name of Father", name: "fatherName" },
          { label: "Relationship of Guardian to the Child", name: "guardianRelation" },
          { label: "Phone Number", name: "phoneNumber" },
          { label: "Secondary Number", name: "secondaryNumber" },
          { label: "Age of Guardian", name: "guardianAge" },
          { label: "Guardian Income", name: "guardianIncome" },  // New income field
        ].map((field, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              fullWidth
              label={field.label}
              name={field.name}
              variant="outlined"
              onChange={handleInputChange}
              error={!!errors[field.name]}
              helperText={errors[field.name]}
            />
          </Grid>
        ))}

        {/* Education */}
        <Grid item xs={12}>
          <Typography variant="h6">Education</Typography>
        </Grid>
        {[ 
          { label: "Educational Status", name: "educationStatus" },
          { label: "Can you read or write?", name: "readWrite" },
          { label: "Would you like to continue in your education?", name: "continueEducation" },
        ].map((field, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              fullWidth
              label={field.label}
              name={field.name}
              variant="outlined"
              onChange={handleInputChange}
              error={!!errors[field.name]}
              helperText={errors[field.name]}
            />
          </Grid>
        ))}

        {/* Housing */}
        <Grid item xs={12}>
          <Typography variant="h6">Housing</Typography>
        </Grid>
        {[ 
          { label: "Address", name: "address" },
          { label: "Network Phone Number", name: "networkPhone" },
          { label: "If yes, how much do you pay?", name: "rent" },
          { label: "Time in Korah", name: "timeInKorah" },
        ].map((field, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              fullWidth
              label={field.label}
              name={field.name}
              variant="outlined"
              onChange={handleInputChange}
              error={!!errors[field.name]}
              helperText={errors[field.name]}
            />
          </Grid>
        ))}

        {/* Approve Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleApproveClick}>
            Approve
          </Button>
        </Grid>
      </Grid>

      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Authentication Required</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your username and password to proceed.
          </DialogContentText>
          <TextField
            margin="dense"
            label="Username"
            name="username"
            fullWidth
            onChange={handleAuthChange}
          />
          <TextField
            margin="dense"
            label="Password"
            name="password"
            type="password"
            fullWidth
            onChange={handleAuthChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
