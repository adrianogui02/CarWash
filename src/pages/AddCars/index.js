import React from 'react';
import { View , Text, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { styles } from '../AddCars/styles';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Box , Input, NativeBaseProvider, FormControl, Select, CheckIcon, WarningOutlineIcon, theme} from 'native-base'


export default function AddCars() {

const navigation = useNavigation();
const [carType, setCarType] = React.useState("");
 
    return (
        <View style={styles.container}>
            
            <View style={styles.containerHeader}>
                <Text style={styles.namePage}>Add New Car</Text>
                <TouchableOpacity 
                style={styles.buttonBack}
                onPress={()=> navigation.navigate('MyCars')}
                >
                    <AntDesign name="back" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
        
            <View style={styles.containerForm}>

                <NativeBaseProvider>
                    <KeyboardAvoidingView>
                        <Box style={styles.inputBox}>
                            <Text style={styles.inputName}>Car Name</Text>
                            <Input 
                            borderRadius={15}
                            variant="rounded" 
                            placeholder="Ex: Corolla"
                            style={styles.inputStyle}
                            />
                        </Box>

                        <Box style={styles.inputBox}>
                            <Text style={styles.inputName}>Manufacturer</Text>
                            <Input 
                            borderRadius={15}
                            variant="rounded" 
                            placeholder="Ex: Toyota"
                            style={styles.inputStyle}
                            />
                        </Box>

                        <View style={styles.view}>
                            <Box style={styles.inputPlaca}>
                                <Text style={styles.inputName}>License Plate</Text>
                                <Input 
                                borderRadius={15}
                                variant="rounded" 
                                placeholder="Ex: NFA-5092"
                                style={styles.inputStyle}
                                />
                            </Box>

                            <Box style={styles.inputAno}>
                                <Text style={styles.inputName}>Year</Text>
                                <Input 
                                borderRadius={15}
                                variant="rounded" 
                                placeholder="Ex: 2017"
                                style={styles.inputStyle}
                                />
                            </Box>
                        </View>

                        <Box style={styles.inputBox}>
                            <Text style={styles.inputName}>Type of Car</Text>
                            <Select 
                            style={styles.inputStyle}
                            borderRadius={15}
                            selectedValue={setCarType} 
                            minWidth="200" 
                            backgroundColor={'#fff'}
                            accessibilityLabel="Choose Service" 
                            placeholder="Choose Car Type" 
                            _selectedItem={{
                                bg: "teal.600",
                                
                                endIcon: <CheckIcon size="5" style={styles.inputStyle} />
                            }} 
                            mt={1} onValueChange={itemValue => setCarType(itemValue)}
                            >
                                <Select.Item label="Hatch" value="ux" />
                                <Select.Item label="Sedan" value="web" />
                                <Select.Item label="SUV" value="cross" />
                                <Select.Item label="Pick-Up" value="ui" />
                                <Select.Item label="Sporting" value="backend" />
                            </Select>
                        </Box>

                        <TouchableOpacity 
                            style={styles.addCarContainer}
                            activeOpacity={0.5}
                            onPress={()=> navigation.navigate('AddCar')}
                            >
                                <View style={styles.addCarContent}>
                                <Text style={styles.addCarText}>Add Car</Text>
                                
                                </View>
                        </TouchableOpacity>
                        
                    </KeyboardAvoidingView>
                </NativeBaseProvider>
            </View>
                        
            

        </View>
    );
}