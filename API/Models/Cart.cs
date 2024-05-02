// create a cart model which store the information of product and quantity
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Cart
    {
        [Key]
        public int Id { get; set; }
        public string ProductName { get; set; } = null!;
        public int Quantity { get; set; }
        public double Price { get; set; }
        public DateTime DateCreated { get; set; }
        public int ProductId { get; set; }
        public virtual Product Product { get; set; }  // Lazy loading
    }
}

// q: How to have one to many relationship in entity framework core?
// Ans: In entity framework core, one to many relationship can be achieved by using the navigation property.
// For example, if we have two entities, Product and Category, and we want to create a one to many relationship between them,
// we can add a navigation property in the Product entity that references the Category entity.

