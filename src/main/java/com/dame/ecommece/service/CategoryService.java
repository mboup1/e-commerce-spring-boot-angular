package com.dame.ecommece.service;

import com.dame.ecommece.entity.Category;
import com.dame.ecommece.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    public Category saveCategory(Category category) {
        return categoryRepository.save(category);
    }

    public Category updateCategory(Long id, Category updatedCategory) {
        Category existingCategory = getCategoryById(id);
        if (existingCategory != null) {
            updatedCategory.setIdCat(id); // Ensure the category id matches the path variable id
            return categoryRepository.save(updatedCategory);
        } else {
            return null; // Or throw an exception if the category doesn't exist
        }
    }

    public void deleteCategory(Long id) {
        categoryRepository.deleteById(id);
    }
}
