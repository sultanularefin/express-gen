

## What I did today: september_19_2021, Sunday, Home Office:

1. File upload from TripzChat application to my local server. If worked then do the same with the API provided by Opu Vai. If worked then make changes to Registration pages so that we can upload images in Registration page in different way, currently we are using a package name "Rn-Fetch-Blob". which causes application size to get bigger, (around 3 megabyte), is old and doesn't comply with other packages.

2. If file upload don't work within 2 hours then move to other works like "adding Redux to Active page, Pending Partners page, Blocked Partners page" etc.

3. SpendnGain push notification badge 8. issue (checked but need to come to office to fix it).
4. Added Redux in ActivePartners page.



## https://www.youtube.com/watch?v=ro3IUc9o88c

## https://www.youtube.com/watch?v=ro3IUc9o88c


## /Programs/byvl/tripzChatHook$ ifconfig


  inet **192.168.0.103**  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 fe80::50ca:c8f9:df1f:f34b  prefixlen 64  scopeid 0x20<link>
ether **70:18:8b:81:d9:89**  txqueuelen 1000  (Ethernet)

## local router defined address: 192.168.0.103

## mac: 70:18:8b:81:d9:89


## arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/tripzChatHook$ ifconfig
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 6559  bytes 41914055 (41.9 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 6559  bytes 41914055 (41.9 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlo1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.0.103  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 fe80::50ca:c8f9:df1f:f34b  prefixlen 64  scopeid 0x20<link>
        ether 70:18:8b:81:d9:89  txqueuelen 1000  (Ethernet)
        RX packets 5987  bytes 4097462 (4.0 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 5224  bytes 1141422 (1.1 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/tripzChatHook$ 

## to find default gateway: 

## sk@sk:~$ route -n
Kernel IP routing table
Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
0.0.0.0         **192.168.1.1**     0.0.0.0         UG    0      0        0 eth1
192.168.1.0     0.0.0.0         255.255.255.0   U     1      0        0 eth1


## mac address: f4-60-e2-ac-1c-2a


## arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/tripzChatHook$ hostname -I
192.168.0.103 

## this worked: 192.168.0.103


## arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/tripzChatHook$ hostname -i
127.0.1.1
arefin@arefin-HP-ProBook-450-G0:~/Programs/byvl/tripzChatHook$ 





## https://www.npmjs.com/package/react-native-fs

## https://www.npmjs.com/package/react-native-document-picker


```json

{"_bodyBlob": {"_data": {"__collector": [Object], "blobId": "868c7baa-13cc-4f1c-bb91-53b062f4f01f", "offset": 0, "size": 97}}, "_bodyInit": {"_data": {"__collector": [Object], "blobId": "868c7baa-13cc-4f1c-bb91-53b062f4f01f", "offset": 0, "size": 97}}, "bodyUsed": false, "headers": {"map": {"access-control-allow-headers": "Origin, X-Requested-With, Content-Type, Accept", "access-control-allow-origin": "*", "connection": "keep-alive", "content-length": "97", "content-type": "application/json; charset=utf-8", "date": "Mon, 20 Sep 2021 01:45:49 GMT", "etag": "W/\"61-eaAAeBPPnRyBLhXelNJtfxGN8Co\"", "keep-alive": "timeout=5", "x-powered-by": "Express"}}, "ok": true, "status": 200, "statusText": "", "type": "default", "url": "http://192.168.0.103:3000/upload"}


```


## what I will do today, 20th September, Monday (Home Office):

1. Image upload worked with "local express backend server" from "tripzChat Application in my physical phone".  ---done.
2. Some work in active partner's page's Redux implementation.  ----done---
3. Add Redux to Pending Partners.           ---partially done----
4. Add Redux to Blocked Partners page.      ---not touched-----




## stripped code:

```js

   // await dispatch(get_all_partner_feedz_Async(parnterID));



                    /*


                    // const partner_id2 = await AsyncStorage.getItem('user_id');
                    const url = `https://tripzchat.com/api_dev/api/myPartner/getAllPartner`;

                    fetch(url, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },

                        body: JSON.stringify({
                            partner_id: userIDArg

                        }),
                    }).


                        // return fetch (url).
                        then((response) => response.json()).then(async (responseJson) => {

                        const userName2 = userDataState.name;

                            // await AsyncStorage.getItem('userName');


                        if (responseJson.message === 'Unable to get all partner.') {
                            // setIsLoadingState(false);
                            setPartnersState([]);
                            setIsLoadingState(false);


                            // console.log("userName2__  :  ", userName2);
                            setUserIDState(userIDArg);
                            setUserNameState(userName2 === null ? '' : userName2);

                            // setIsLoadingState(false);
                            // setPartnersDataState([]);
                        } else {


                            // console.log('responseJson.... at getMyPartner inside useFocusEffect of My Partners Page...', responseJson);

                            setPartnersState(responseJson);
                            setIsLoadingState(false);


                            // console.log("userName2__  :  ", userName2);
                            setUserIDState(userIDArg);
                            setUserNameState(userName2 === null ? '' : userName2);
                        }


                    }).catch((error) => {
                        console.error('error...', error);
                    });
                    */
```


## const upload2
## "react-native-fs": "^2.18.0",
```ts



  const upload2 = async () => {
       
        const uploadUrl =
            // 'http://192.168.0.103:3000/upload';
            // 'http://192.168.0.101:3000/upload';
        "https://tripzchat.com/api_dev/api/user/testImageUpload";   //--worked
        // "http://localhost:3000/upload";  //---worked
        //"http://127.0.0.1:3000/upload";   // ---worked


        // For testing purposes, go to http://requestb.in/ and create your own link
// create an array of objects of the files you want to upload
        const files = [
            {
                name: imagesState[0].title,
                filename: imagesState[0].title,
               
                filepath: imagesState[0].uri,
               
                filetype: imagesState[0].mime,
              
            }
        ];

        const uploadBegin = (response:any) => {
            const jobId = response.jobId;
            console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
        };

        const uploadProgress = (response:any) => {
            const percentage = Math.floor((response.totalBytesSent/response.totalBytesExpectedToSend) * 100);
            console.log('UPLOAD IS ' + percentage + '% DONE!');
        };

// upload files
        RNFS.uploadFiles({
            toUrl: uploadUrl,
            files: files,
            method: 'POST',
            headers: {
                // 'Accept': 'application/json',
                'Accept':  'multipart/form-data'
            },

            begin: uploadBegin,
            progress: uploadProgress
        }).promise.then((response) => {
            if (response.statusCode ===200) {
                console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
            } else {
                console.log('SERVER ERROR');
            }
        }).
            catch((err) => {
                if(err.description === "cancelled") {
                    // cancelled by user
                }
                console.log(err);
            });

    };

```
## old code:

```ts
  const getMyPartner2 = async () => {


        console.log('getMyPartner2: ');
        
        

        // const partner_id = await AsyncStorage.getItem ('user_id');


        // return fetch (url).
        //old:// const url = `https://tripzchat.com/api/file/my_partners/getall.php?partner_id=${partner_id}`;
        // new: const url = `https://tripzchat.com/api_dev/api/myPartner/getAllPartner`;


        const result_action = await dispatch(get_all_active_partners(userDataState.user_id,));

        
        
        /*
        
        


        const url = `https://tripzchat.com/api_dev/api/myPartner/getAllPartner`;

        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                partner_id: userDataState.user_id,
                //user_id: userIDState,
                //this.state.user_id,
                //interest_id: selectedIds.toString(),
                //interestItem,
            }),
        }).then((response) => response.json()).then((responseJson) => {
            // this.setState (
            //     {
            //         isLoading: false,
            //         dataSource: responseJson,
            //     },
            //     function () {}
            // );


            if (responseJson.message === 'Unable to get all partner.') {
                // setIsLoadingState(false);
                setPartnersState([]);
                // setIsLoadingState(false);

                // setIsLoadingState(false);
                // setPartnersDataState([]);
            } else {

                // console.log('responseJson.... at getMyPartner inside useFocusEffect of My Partners Page...',
                //     responseJson);

                setPartnersState(responseJson);
                // setIsLoadingState(false);


            }


        }).catch((error) => {
            console.error('error...', error);
        });
        
        */

    };
```
2) 5)




## delete::

```ts




        // delete_action


        // 'Cannot Delete Tripzchat Support Account.'
        // 'My partners was deleted.'

        /*
        fetch('https://tripzchat.com/api_dev/api/myPartner/deletePartner', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                user_id: userDataState.user_id,
                partner_id: partner_id2,

            }),
        }).then((response) => response.json()).
            then((responseJson) => {
                console.log('entire response for partner delete: ', responseJson);
                const success = responseJson.message;
                if (success === 'My partners was deleted.') {

                    Alert.alert('Successfully deleted.');

                    getMyPartner2();
                } else if (success === "TripzchatSupportAccount") {

                    Alert.alert('Cannot Delete Tripzchat Support Account.');
                } else {
                    Alert.alert('not successful, Please Try again');

                }
            }).
            catch((error) => {

                console.log('error... in partner delete.... ', error);
            });

        */
```


## stripped code:

```java



        // };






        /*




        fetch('https://tripzchat.com/api_dev/api/user/blockAdd', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                user_id: userDataState.user_id,
                block_id: partner_id2,
            }),
        }).then((response) => response.json()).
            then((responseJson) => {
                console.log('responseJson: at block attempt::: ', responseJson);
                // ...begin

                const success = responseJson.message;
                if (success === 'Successfully Blocked') {


                    Alert.alert('Successfully Blocked');


                    fetch(
                        'https://tripzchat.com/api_dev/api/myPartner/deletePartner',
                        {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },

                            body: JSON.stringify({
                                user_id: userDataState.user_id,
                                partner_id: partner_id2,
                            }),
                        }
                    ).then((response) => response.json()).then((responseJson2) => {
                        const success2 = responseJson2.message;
                        if (success2 === 'My partners was deleted.') {

                            getMyPartner2();

                        } else {

                            Alert.alert('Please Try again, wasn\'t successful');

                        }
                    })
                    .catch((error) => {

                        console.log('some error...', error);

                    });


                    getMyPartner2();


                } else if (success === "TripzchatSupportAccount") {

                    Alert.alert('Cannot Block Tripzchat Support Account.');

                } else {

                    Alert.alert('Please Try again');

                }




            }).
            catch((error) => {
                console.log('some error ...', error);
                // setIsLoadingState(false);
                // console.reportErrorsAsExceptions = false;
            });


        */
```