# Debugging Notes #
### Problem: KPISoft Landing Page and website to have same styling for the forms <br>
#### Challenges:
1. The landing page we scraped from Wordpress didnt have a form or its styling. <br>
2. The custom css written did not work because the predefined HubSpot-CMS styling was overwriting the custom css - all of them had '!IMPORTANT' keyword on the css.<br>
3. The hubspot is using bootstrap 2 dependency for the styling which itself has many limitations<br>
4. Toughest thing: KPISoft's requirement is to change to hubspot form according to the campaign they run, also hubspot form fields are progressive (previously collected form fields will be replaced with new form fields). So styling them using specific classes or id's will not be possible.
<br><br>
#### Solution and approach

1. Inspected for generic key names for each forms and fields, found out names such as *form*, *input*, *hs-error-message*, *submit*, *label*, *hs-form-wrapper* etc..<br>
2. Applied styling with combination of generic classes to avoid conflicts <br>
<br>
***



