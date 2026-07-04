import { BrowserRouter, Route, Routes } from 'react-router-dom';
//add navigate when needed above
import ProtectedRoute from './sharer/components/auth/ProtectedRoute.jsx';
//sharer
import HomePage from './home/pages/homepage/HomePage.jsx';
import SignupPage from './sharer/pages/auth/SignupPage.jsx';
import SigninPage from './home/pages/auth/SigninPage.jsx';
import DashboardPage from './sharer/pages/dashboard/DashboardPage.jsx';
import EditProfilePage from './sharer/pages/profile/EditProfilePage.jsx';
import ProfilePage from './sharer/pages/profile/Profilepage.jsx';
import CreateAdPage from './sharer/pages/ads/createAd/createAdPage.jsx';
import AdPage from './sharer/pages/ads/AdPage.jsx';
import MyAdsPage from './sharer/pages/ads/myAds/myAdsPage.jsx';
import SharerPublicProfilePage from './sharer/pages/public_profile/PublicProfilePage.jsx';
import ClientelePage from './sharer/pages/clientele/clientelePage.jsx';
import SharerReviewPage from './sharer/pages/review/reviewPage.jsx';

//provider
import ProviderSignupPage from './provider/pages/auth/ProviderSignupPage.jsx';
import ProviderDashboardPage from './provider/pages/dashboard/DashboardPage.jsx';
import ProviderProfilePage from './provider/pages/profile/ProfilePage.jsx';
import ProviderSearchAdsPage from './provider/pages/search_ads/searchAdsPage.jsx';
import ProviderBookingPage from './provider/pages/booking/bookingPage.jsx';
import ProviderPublicProfilePage from './provider/pages/public_profile/publicProfile.jsx';
import ProviderReviewPage from './provider/pages/review/reviewPage.jsx';

function  App() {

  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/signup/sharer" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/sharer/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sharer/dashboard/sharer_profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sharer/dashboard/edit_sharer_profile"
              element={
                <ProtectedRoute>
                  <EditProfilePage />
                </ProtectedRoute>
              }
            />
          <Route
              path="/sharer/dashboard/create_ad"
              element={
                <ProtectedRoute>
                  <CreateAdPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sharer/dashboard/sharer_ads"
              element={
                <ProtectedRoute>
                  <AdPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sharer/dashboard/my_ads"
              element={
                <ProtectedRoute>
                  <MyAdsPage />
                </ProtectedRoute>
              }
            />

            <Route 
              path="/sharer-profile/:sharerId" 
              element={
                <ProtectedRoute>
                  <SharerPublicProfilePage />
                </ProtectedRoute>
              }
              />
            
            <Route
              path="/sharer/dashboard/sharer_clientele"
              element={
                <ProtectedRoute>
                  <ClientelePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/sharer/dashboard/sharer_review"
              element={
                <ProtectedRoute>
                  <SharerReviewPage />
                </ProtectedRoute>
              }
            />
            
            <Route path="/signup/provider" element={<ProviderSignupPage />} />

            <Route
              path="/provider/dashboard"
              element={
                <ProtectedRoute>
                  <ProviderDashboardPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/provider/dashboard/provider_profile"
              element={
                <ProtectedRoute>
                  <ProviderProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/provider/dashboard/provider_search_ads"
              element={
                <ProtectedRoute>
                  <ProviderSearchAdsPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/provider/dashboard/provider_search_ads"
              element={
                <ProtectedRoute>
                  <ProviderSearchAdsPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/provider/dashboard/provider_bookings"
              element={
                <ProtectedRoute>
                  <ProviderBookingPage />
                </ProtectedRoute>
              }
            />

            <Route 
              path="/provider-profile/:providerId" 
              element={
                <ProtectedRoute>
                  <ProviderPublicProfilePage />
                </ProtectedRoute>
              }
              />

            <Route 
              path="/provider/dashboard/provider_review" 
              element={
                <ProtectedRoute>
                  <ProviderReviewPage />
                </ProtectedRoute>
              }
              />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;