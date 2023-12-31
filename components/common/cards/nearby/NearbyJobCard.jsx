import React from "react"
import { View, Text, TouchableOpacity, Image } from "react-native"

import styles from "./nearbyjobcard.style"
import { checkImageURL } from "../../../../utils"

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.jobName}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard
