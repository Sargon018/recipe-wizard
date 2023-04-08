import {StyleSheet} from 'react-native';
import commonStyles from '../../common.styles';

export const NewRecipeScreenStyles = StyleSheet.create({
  searchTitle: {
    marginBottom: 15,
    color: commonStyles.primaryTextColor,
    fontWeight: 600,
    fontSize: 12,
    textAlign: 'center'
  },
  ingredientsList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  ingredient: {
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: commonStyles.secondaryTextColor,
    backgroundColor: commonStyles.primaryBackground,
    marginRight: 5,
    marginBottom: 5
  },
  ingredientName: {
    color: commonStyles.secondaryTextColor
  }
});
