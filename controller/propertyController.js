const { response } = require("express");
const propertyModel = require("../model/propertyModel");
const createProperty = async (req, res) => {
  try {
    // const {title,description,address,bedRoom,bathRoom,area,parking,furnished,price,images,}
    console.log(req.body, "property data for creating");
    const newProperty = await propertyModel.create(req.body);
    return res.status(201).json({
      success: true,
      message: "new property created",
      property: newProperty,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllProperty = async (req, res) => {
  try {
    const property = await propertyModel.find();
    return res.status(200).json({
      success: true,
      message: "Property fetch Success",
      property,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const findProperty = async (req, res) => {
  try {
    // const id=req.params.id
    const { id } = req.params;
    const property = await propertyModel.findById(id);
    if (!property) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Property fectch id",
      property,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProperty = await propertyModel.findByIdAndDelete(id);
    if (!deleteProperty) {
      return res.status(404).json({
        success: false,
        message: "Property not found",
        deleteProperty,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Property deleted by id",
      deleteProperty,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateProperty = async (req, res) => {
  try {
    const id = req.params.id;
    // const {id}=req.params
    const findProperty = await propertyModel.findById(id);
    if (!findProperty) {
      return res.status(404).json({
        success: false,
        message: "Property id not found for update",
      });
    }
    const updateProperty = await propertyModel.findByIdAndUpdate(
      id,
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
          price: req.body.price,
          address: req.body.address,
          area: req.body.area,
          bathRoom: req.body.bathRoom,
          bedRoom: req.body.bedRoom,
          images: req.body.images,
          parking: req.body.parking,
          isAvailable: req.body.isAvailable,
          furnished: req.body.furnished,
          propertyType: req.body.propertyType,
        },
      },
      {
        new: true,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Property updated",
      property: updateProperty,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
module.exports = {
  createProperty,
  getAllProperty,
  findProperty,
  deleteProperty,
  updateProperty,
};
