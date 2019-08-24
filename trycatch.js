try{
    throw  {
        code: 'COMM_O4B_BATCH_FP_CON_ERR_247118',
        message: 'Batch FP Balances API Service: Error while transforming data for balance payload',
        statusCode: 500,
      }
}catch(e){
    console.log(typeof e)
    console.log(e instanceof Error)
}