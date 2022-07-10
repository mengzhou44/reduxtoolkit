import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from './features/photo-slice';

const Photo = () => {
  const { photo } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhoto(1));
  }, []);

  if (photo) return <img src={photo.thumbnailUrl} alt="photo" />;
};

export default Photo;
