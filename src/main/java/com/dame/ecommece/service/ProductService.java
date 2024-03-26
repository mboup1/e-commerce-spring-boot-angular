package com.dame.ecommece.service;

import com.dame.ecommece.entity.Product;
import com.dame.ecommece.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Product updatedProduct) {
        Product existingProduct = getProductById(id);
        if (existingProduct != null) {
            updatedProduct.setIdProd(id); // Ensure the product id matches the path variable id
            return productRepository.save(updatedProduct);
        } else {
            return null; // Or throw an exception if the product doesn't exist
        }
    }


    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
