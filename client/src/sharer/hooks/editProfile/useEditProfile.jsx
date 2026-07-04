import { useMutation } from '@tanstack/react-query';
import { editSharerProfile } from '../../services/editProfile/editProfileService.jsx';

export const useEditSharerProfile = () => {
  return useMutation({
    mutationFn: editSharerProfile,
  });
};
