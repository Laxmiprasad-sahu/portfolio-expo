# Portfolio Website Setup Instructions

## 🎉 Welcome to Your Portfolio!

Your professional portfolio website is ready! Follow these simple steps to complete the setup.

---

## 📧 Step 1: Setup Contact Form (Formspree)

The contact form needs to be connected to Formspree to receive emails.

### Instructions:

1. **Create a Formspree Account**
   - Go to [https://formspree.io/](https://formspree.io/)
   - Sign up for a free account

2. **Create a New Form**
   - Click on "New Project" or "Create New Form"
   - Name your form (e.g., "Portfolio Contact Form")
   - Set your email to: **lpsahu1306@gmail.com**

3. **Get Your Form ID**
   - After creating the form, you'll see a form endpoint like:
     ```
     https://formspree.io/f/xyzabc123
     ```
   - Copy the ID part: `xyzabc123`

4. **Update the Code**
   - Open `app/index.tsx`
   - Find line 40: `https://formspree.io/f/YOUR_FORM_ID`
   - Replace `YOUR_FORM_ID` with your actual form ID
   - Example: `https://formspree.io/f/xyzabc123`

---

## 📊 Step 2: Setup Google Analytics (Optional but Recommended)

Track your website visitors and see who's viewing your portfolio!

### Instructions:

1. **Create Google Analytics Account**
   - Go to [https://analytics.google.com/](https://analytics.google.com/)
   - Sign in with your Google account

2. **Create a Property**
   - Click "Admin" (bottom left)
   - Click "+ Create Property"
   - Name: "Laxmi Prasad Portfolio"
   - Set timezone and currency

3. **Get Your Measurement ID**
   - After creating the property, go to "Data Streams"
   - Click "Add Stream" → "Web"
   - Enter your website URL
   - You'll get a Measurement ID like: `G-XXXXXXXXXX`

4. **Update the Code**
   - Open `app/_layout.tsx`
   - Find line 28: `'GA_MEASUREMENT_ID'`
   - Replace `GA_MEASUREMENT_ID` with your actual ID
   - Example: `'G-ABC123XYZ'`

---

## 🖼️ Step 3: Add Your Professional Photo

Replace the placeholder with your professional headshot.

### Instructions:

1. **Prepare Your Image**
   - Use a professional, high-quality photo
   - Recommended size: 800x800 pixels or larger (square)
   - Format: JPG or PNG

2. **Add Image to Project**
   - Save your photo in `assets/images/` folder
   - Name it: `profile-photo.jpg` (or `.png`)

3. **Update the Code**
   - Open `app/index.tsx`
   - Find the `imagePlaceholder` section (around line 105)
   - Replace the `View` with an `Image` component:
   
   ```tsx
   import { Image } from 'react-native';
   
   // Replace this:
   <View style={styles.imagePlaceholder}>
     <Text style={styles.placeholderText}>Your Photo Here</Text>
   </View>
   
   // With this:
   <Image
     source={require('@/assets/images/profile-photo.jpg')}
     style={styles.profileImage}
   />
   ```

4. **Add Image Style**
   - In the `styles` section at the bottom, add:
   ```tsx
   profileImage: {
     width: isMobile ? 240 : 280,
     height: isMobile ? 240 : 280,
     borderRadius: isMobile ? 120 : 140,
     borderWidth: 6,
     borderColor: Colors.accent,
   },
   ```

---

## 🎨 Optional Customizations

### Change Colors
Edit `constants/colors.ts` to use your preferred color scheme.

### Update Content
Edit `app/index.tsx` to modify any text, add projects, or update experience.

### Add Resume Download
You can add a button to download your resume by:
1. Adding your resume PDF to `assets/`
2. Creating a download button in the hero section

---

## 🚀 Testing Your Website

1. **Test Contact Form**
   - Fill out the form on your website
   - Check your email (lpsahu1306@gmail.com) for the message
   - Check Formspree dashboard for submissions

2. **Test Google Analytics**
   - Visit your website
   - Wait 24-48 hours
   - Check Google Analytics dashboard for visitor data

---

## 📱 Responsive Design

Your portfolio is fully responsive and works beautifully on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers
- 🌐 All modern browsers

---

## 🎯 Next Steps

1. ✅ Setup Formspree for contact form
2. ✅ Setup Google Analytics for tracking
3. ✅ Add your professional photo
4. ✅ Test the contact form
5. ✅ Share your portfolio with recruiters!

---

## 📞 Need Help?

If you encounter any issues:
1. Check that you've replaced all placeholder IDs
2. Ensure your email in Formspree matches lpsahu1306@gmail.com
3. Verify that your Google Analytics Measurement ID starts with "G-"

---

## 🎉 Your Portfolio is Ready!

You now have a professional, modern portfolio website that showcases:
- ✨ Your technical skills
- 🚀 Your innovative projects
- 💼 Your entrepreneurial journey
- 📧 Easy way for recruiters to contact you

**Good luck with your job search and entrepreneurial ventures!** 🌟
