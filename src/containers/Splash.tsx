import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import SafeAreaContainer from './SafeAreaContainer';
import Video from 'react-native-video';
import { IMAGES } from '../constants';

const Splash = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    // Perform an action after video ends (e.g., navigation or other logic)
    console.log('Video Ended');
  };

  return (
    <SafeAreaContainer safeArea={false}>
      <View style={styles.container}>
        <Video
          ref={videoRef}
          source={IMAGES.SplashVideo} // Video source, can be local or remote URL
          style={styles.video}
          resizeMode="cover" // Adjust the video size to cover the container
          repeat={false} // Optional: Set to true if you want to loop the video
          muted={true} // Optional: Set to true to mute the video
          onEnd={handleVideoEnd} // Logic to run after the video ends
          onLoad={() => {
            // Set a timeout of 20 seconds to stop the video after 20 seconds
            setTimeout(() => {
              if (videoRef.current) {
                videoRef.current.seek(20);  
                console.log('Video reached 20 seconds');
              }
            }, 5000);  // Timeout for 20 seconds
          }}
        />
      </View>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Splash;
