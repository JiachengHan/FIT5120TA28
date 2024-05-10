import numpy as np

def logistic_regression_prediction(CAD, Fracture, Drinking, COPD, age_group_65_and_above):
    # Updated coefficients and intercept from your logistic regression equation
    intercept = -0.10406359920546569
    coefficients = np.array([0.28481604, 0.02596063, -0.17937574, 0.16400758, 0.10808284])
    
    # Features array
    features = np.array([CAD, Fracture, Drinking, COPD, age_group_65_and_above])
    
    # Calculate the logit (log-odds)
    logit_p = intercept + np.dot(coefficients, features)
    
    # Convert logit to probability
    probability = 1 / (1 + np.exp(-logit_p))
    
    return probability