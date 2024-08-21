package com.example.ecommerce.controller;

import com.example.ecommerce.model.CartItem;
import com.example.ecommerce.model.User;
import com.example.ecommerce.service.CartService;
import com.example.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {
    @Autowired
    private CartService cartService;

    @Autowired
    private UserService userService;

    @GetMapping
    public List<CartItem> getCartItems(Principal principal) {
        User user = userService.findByUsername(principal.getName());
        return cartService.getCartItems(user);
    }

    @PostMapping("/add")
    public CartItem addToCart(@RequestParam Long productId, @RequestParam int quantity, Principal principal) {
        User user = userService.findByUsername(principal.getName());
        return cartService.addToCart(productId, user, quantity);
    }

    @DeleteMapping("/remove/{id}")
    public void removeFromCart(@PathVariable Long id) {
        cartService.removeFromCart(id);
    }
}
