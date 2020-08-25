import React from 'react';
import {FlatList, View, Alert} from 'react-native';
import {Page} from 'src/constants';
import {connect} from 'react-redux';
import {ListItem, Button} from 'react-native-elements';
import * as rss from 'react-native-rss-parser';
import PDFLib, {PDFDocument, PDFPage} from 'react-native-pdf-lib';

interface Props {
  favourites: rss.FeedItem[];
}

export const FavouritesPage: Page<Props> = ({favourites}) => {
  const keyExtractor = (item: rss.FeedItem, index: number) => index.toString();

  const renderItem = ({item}: {item: rss.FeedItem}) => (
    <ListItem title={item.title} bottomDivider />
  );

  // console.log(favourites.((i) => i.title + '\n' + i.description + '\n'));

  const exportPdf = async () => {
    const pages = favourites.map((i) =>
      PDFPage.create()
        .setMediaBox(200, 200)
        .drawText(i.title, {
          x: 5,
          y: 235,
          color: '#007386',
        })
        .drawText(i.description, {
          x: 5,
          y: 235,
          color: '#007386',
        }),
    );

    console.log(...pages);

    const docsDir = await PDFLib.getDocumentsDirectory();
    const pdfPath = `${docsDir}/sample.pdf`;
    PDFDocument.create(pdfPath)
      .addPages(...pages)
      .write()
      .then((path: string) => {
        Alert.alert('Success', 'PDF created at: ' + path);
      })
      .catch((e) => Alert.alert('Error', e));
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Export as PDF" onPress={exportPdf} />
      <FlatList
        keyExtractor={keyExtractor}
        data={favourites}
        renderItem={renderItem}
      />
    </View>
  );
};

export const Favourites = connect((store) => ({
  favourites: store.favouriteReducer.favourites,
}))(FavouritesPage);
