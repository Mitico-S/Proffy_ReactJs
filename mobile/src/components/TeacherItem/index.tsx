import { View, Image, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlinIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/56173070?s=400&u=4d174a79863bcdb487c36553e6dc4f6c0497f195&v=4',
          }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>João Pedro Alves</Text>
          <Text style={styles.subject}>Js</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Dev fullstack em construção, ux and ui design
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ 120,00</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlinIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
