import express  from 'express';
import cors from 'cors';
import loginRouter from './home/routes/auth/signin.js';

//sharer
import SharerRegisterRouter from './sharer/routes/auth/signup.js';
import SharerWelcomeUserRouter from './sharer/routes/utils/welcomeUser.js';
import SharerGetCreditRouter from './sharer/routes/utils/getCredits.js';
import SharerNotificationRouter from './sharer/routes/widgets/notifications.js';
import SharerEditProfileRouter from './sharer/routes/components/editProfile/edit_profile.js';
import SharerGetProfileDataRouter from './sharer/routes/components/profile/getProfileData.js';
import SharerCreateAdRouter from './sharer/routes/components/createAd/createAd.js';
import SharerGetMyAdsRouter from './sharer/routes/components/getMyAds/getMyAds.js';
import SharerClienteleRouter from './sharer/routes/components/clientele/clientele.js';
import SharerReviewRouter from './sharer/routes/components/review/reviews.js'
import SharerGetFeedbackRouter from './sharer/routes/components/profile/getFeedback.js'
import SharerGetPublicFeedbackRouter from './sharer/routes/components/public_profile/getFeedback.js'

//provider
import ProviderRegisterRouter from './provider/routes/auth/signup.js';
import ProviderWelcomeUserRouter from './provider/routes/utils/welcomeUser.js';
import ProviderNotificationRouter from './provider/routes/widgets/notifications.js';
import ProviderSearchAdsRouter from './provider/routes/components/search_ads/search_ads.js';
import SharerGetPublicProfileDataRouter from './sharer/routes/components/public_profile/getProfileData.js';
import SharerBookingRequestRouter from './sharer/routes/components/public_profile/bookingRequest.js'
import ProviderGetBookingsRouter from './provider/routes/components/booking/getBookingData.js'
import ProviderGetProfileDataRouter from './provider/routes/components/public_profile/getProfileData.js'
import ProviderReviewRouter from './provider/routes/components/review/reviews.js'
import ProviderGetFeedbackRouter from './provider/routes/components/profile/getFeedback.js'
import ProviderGetPublicFeedbackRouter from './provider/routes/components/public_profile/getFeedback.js'



const app = express();

app.use(cors());
app.use(express.json());

//sharer
//loginUser
app.use('/api/auth/login', loginRouter);
//registerUser
app.use('/api/auth/signup/sharer', SharerRegisterRouter);
//welcome user
app.use('/api/sharer/welcome_user', SharerWelcomeUserRouter);
//getCredits
app.use('/api/sharer/get_credits',SharerGetCreditRouter);
//notifications
app.use('/api/sharer', SharerNotificationRouter);
//edit profile
app.use('/api/sharer/edit-profile', SharerEditProfileRouter);
//get profile data
app.use('/api/sharer/get-profile-data', SharerGetProfileDataRouter);
//create ad
app.use('/api/sharer/create-ad', SharerCreateAdRouter);
//get and delete my ads
app.use('/api/sharer', SharerGetMyAdsRouter);
//clientele
app.use('/api/sharer/clientele', SharerClienteleRouter);
//reviews
app.use('/api/sharer/reviews', SharerReviewRouter);
//get feedback
app.use('/api/sharer/feedback', SharerGetFeedbackRouter);
//get public feedback
app.use('/api/public/sharer', SharerGetPublicFeedbackRouter);


//provider
app.use('/api/auth/signup/provider', ProviderRegisterRouter)
//welcome user
app.use('/api/provider/welcome_user', ProviderWelcomeUserRouter);
//get provider public profile data
app.use('/api/provider/provider-profile', ProviderGetProfileDataRouter);
//notifications
app.use('/api/provider', ProviderNotificationRouter);
//search ads
app.use('/api/provider/ads', ProviderSearchAdsRouter);
//get sharer public profile data
app.use('/api/provider/public-profile', SharerGetPublicProfileDataRouter)
//create booking
app.use('/api/provider', SharerBookingRequestRouter);
//get bookings
app.use('/api/provider/get-booking-data', ProviderGetBookingsRouter);
//create review
app.use('/api/provider/reviews', ProviderReviewRouter);
//get feedback
app.use('/api/provider/feedback', ProviderGetFeedbackRouter);
//get public feedback
app.use('/api/public/provider', ProviderGetPublicFeedbackRouter);


export default app;